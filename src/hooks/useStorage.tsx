import * as React from 'react';

export const useStorage = (storageKey: string, initData: any) => {
    const initCache = localStorage.getItem(storageKey);
    const [data, setData] = React.useState(initCache ? JSON.parse(initCache) : initData ? initData : null);

    React.useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(data));
    }, [data]);

    return { data, setData }
}