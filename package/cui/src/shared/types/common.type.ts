import { Dayjs } from 'dayjs';

type Nullable<T> = T | null;

type NullAbleDayjs = Nullable<CommonDayjsType>;

interface CommonDayjsType extends Dayjs {}

export type { Nullable, NullAbleDayjs, CommonDayjsType };
