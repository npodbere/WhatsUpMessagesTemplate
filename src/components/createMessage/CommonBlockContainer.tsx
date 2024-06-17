interface ICommonBlockContainer {
  children: React.ReactNode;
}

function CommonBlockContainer({ children }: ICommonBlockContainer) {
  return <div className="create-message-header-container">{children}</div>;
}

export default CommonBlockContainer;
