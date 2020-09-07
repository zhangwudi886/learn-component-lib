import React, {
    PropsWithChildren,
    ReactNode,
    useMemo,
    createContext,
    useState,
    useEffect,
    useRef,
    useContext,
  } from 'react';
  
  const Context = createContext({});
  
  export function AliveScope(props: any) {
    const [state, setState] = useState({});
    // 存放渲染之后的dom
    const ref: any = useMemo(() => {
      return {};
    }, []);
  
    const keep = useMemo(() => {
      return (id: any, children: any) =>
        new Promise(resolve => {
          // 这里的children是虚拟 节点
          setState({ [id]: { id, children } });
          setTimeout(() => {
            //需要等待setState渲染完拿到实例返回给子组件。
            // 将渲染过的dom节点 返回给keep-alive组件
            resolve(ref[id]);
          });
        });
    }, [ref]);
    return (
      <Context.Provider value={keep}>
        {props.children}
        {/* keepAlive节点的children实际是在父组件渲染的 */}
        {Object.values(state).map((v: any, i: number) => (
          <div key={v.id} ref={node => (ref[v.id] = node)}>
            {v.children}
          </div>
        ))}
      </Context.Provider>
    );
  }
  
  type KeepAliveProps = {
    id: string;
  };
  
  export function KeepAlive(props: PropsWithChildren<KeepAliveProps>) {
    const keep: any = useContext(Context);
    const ref: any = useRef(null);
  
    useEffect(() => {
      debugger;
      const init = async (data: any) => {
        // 获取真实dom节点
        const realContent = await keep(data.id, data.children);
        if (ref.current) {
          // 真实dom挂载到 节点上
          ref.current.appendChild(realContent);
        }
      };
      init(props);
    }, [props, keep]);
    return <div ref={ref}></div>;