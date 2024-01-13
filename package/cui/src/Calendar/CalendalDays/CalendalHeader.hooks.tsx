import { dateArrayType } from './CalendalHeader.type';

const useCalendalHeaderHooks = () => {
  const dayList: dateArrayType = ['일', '월', '화', '수', '목', '금', '토'];
  return {
    dayList,
  };
};

export { useCalendalHeaderHooks };
