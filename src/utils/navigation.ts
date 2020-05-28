import { History } from 'umi';

interface INavigation {
  history: History<History.PoorMansUnknown> | null;
  setTopLevelHistory: any;
}

const Navigation: INavigation = {
  history: null,
  setTopLevelHistory: (history: any) => {
    Navigation.history = history;
  },
};

export default Navigation;
