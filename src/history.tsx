import { createMemoryHistory, createBrowserHistory } from 'history';

export const browserHistory: any = process.env.IS_BROWSER ? createBrowserHistory() : createMemoryHistory();
