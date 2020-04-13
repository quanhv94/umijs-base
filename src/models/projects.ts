interface IState {
  loading: Boolean;
  items: Array<any>;
}

export default {
  namespace: 'projects',
  state: {
    loading: true,
    items: [],
  },
  reducers: {
    setLoading: (state: IState, { status }: any) => ({
      ...state,
      loading: status,
    }),
    loadSuccess: (state: IState, { items }: any) => ({ ...state, items }),
    deleteSuccess: (state: IState, { projectId }: any) => {
      const items = state.items.filter(item => item.id !== projectId);
      return {
        ...state,
        items,
      };
    },
  },
  effects: {
    *loadAll(action: any, { call, put }: any) {
      yield put({ type: 'setLoading', status: true });
      // TODO: call real api
      yield call(
        () =>
          new Promise(resolve =>
            setTimeout(() => {
              resolve(true);
            }, 2000),
          ),
      );
      // END TOD
      const items = [
        { name: 'project 1', id: '1' },
        { name: 'project 2', id: '2' },
      ];
      yield put({ type: 'loadSuccess', items });
      yield put({ type: 'setLoading', status: false });
    },
    *delete(action: any, { put }: any) {
      const { projectId } = action;
      yield put({ type: 'deleteSuccess', projectId });
    },
  },
};
