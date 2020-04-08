export default {
  namespace: 'projects',
  state: {
    loading: true,
    items: [],
  },
  reducers: {
    setLoading: (state, { status }) => ({ ...state, loading: status }),
    loadSuccess: (state, { items }) => ({ ...state, items }),
    deleteSuccess: (state, { projectId }) => {
      const items = state.items.filter(item => item.id !== projectId);
      return {
        ...state,
        items,
      }
    }
  },
  effects: {
    *loadAll(action, { call, put }) {
      yield put({ type: 'setLoading', status: true });
      // TODO: call real api
      yield call(() => new Promise(((resolve) => setTimeout(() => { resolve(true) }, 2000))));
      // END TOD
      const items = [
        { name: 'project 1', id: '1' },
        { name: 'project 2', id: '2' },
      ]
      yield put({ type: 'loadSuccess', items });
      yield put({ type: 'setLoading', status: false });
    },
    *delete(action, { put }) {
      const { projectId } = action;
      yield put({ type: 'deleteSuccess', projectId });
    }
  }
};
