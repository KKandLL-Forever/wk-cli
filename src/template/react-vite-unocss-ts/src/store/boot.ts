import store from './index';
import { asyncGetIdsUnits } from '@/store/slice/bootSlice'

export default function boot() {
  return new Promise(() => {
    store.dispatch(asyncGetIdsUnits('/imc/resource/eds'));
  });
}
