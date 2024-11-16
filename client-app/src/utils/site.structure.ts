import { ISiteStructure } from '@/site.structure';

interface ISiteStructureWithPath extends ISiteStructure {
  path: string[];
}

// 특정한 id의 메뉴를 검색 후 반환
// 중복되는 id가 있는 경우 처리 불가하므로, 1단계 메뉴에 한하여 사용해야 함
export function findById(data: ISiteStructure[], targetId: string): ISiteStructure | null {
  for (const item of data) {
    if (item.id === targetId) {
      // 원하는 id를 찾은 경우 해당 객체를 반환
      return item;
    }

    if (item.children) {
      // children 속성에서 재귀 호출
      const found = findById(item.children, targetId);

      if (found) {
        // children 내부에서 찾은 결과 반환
        return found;
      }
    }
  }

  // 찾지 못한 경우 null 반환
  return null;
}

// 특정한 id의 메뉴를 검색 후 경로를 포함하여 반환
export function findByIdWithPath(
  data: ISiteStructure[],
  targetId: string,
  path: string[] = []
): ISiteStructureWithPath | null {
  for (const item of data) {
    // 현재 경로를 저장
    const currentPath = [...path, item.id];

    if (item.id === targetId) {
      // 경로를 포함한 객체 반환
      return { ...item, path: currentPath };
    }

    if (item.children) {
      // 재귀 호출
      const found = findByIdWithPath(item.children, targetId, currentPath);

      if (found) {
        return found; // 결과 반환
      }
    }
  }

  // 찾지 못한 경우 null 반환
  return null;
}

// 중복되는 id가 있는 경우 사용
export function findAllById(data: ISiteStructure[], targetId: string, results: ISiteStructure[] = []): ISiteStructure[] {
  for (const item of data) {
    if (item.id === targetId) {
      // id가 일치하면 결과 배열에 추가
      results.push(item);
    }

    if (item.children) {
      // 재귀 호출
      findAllById(item.children, targetId, results);
    }
  }

  // 결과 배열 반환
  return results;
}

// 메뉴 id가 존재하는지 확인하는 함수
export function hasId(data: ISiteStructure[], targetId: string): boolean {
  return data.some((item) => {
    if (item.id === targetId) {
      // 찾은 경우 true 반환
      return true;
    }
    if (item.children) {
      // children에서 재귀 호출
      return hasId(item.children, targetId);
    }

    // 찾지 못한 경우 false 반환
    return false;
  });
}