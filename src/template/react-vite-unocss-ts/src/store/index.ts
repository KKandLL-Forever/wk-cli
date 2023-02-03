import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import bootSlice from '@/store/slice/bootSlice'
import rootSlice from '@/store/slice/rootSlice'

const store = configureStore({
  reducer: {
    bool_slice: bootSlice,
    root_slice: rootSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['async_get_ids_units'],
        ignoredActionPaths:['payload'],
        ignoredPaths: ['boot_slice.idTable','boot_slice.unitTable']
      },
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
