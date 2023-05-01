export const formattedText = (parentClassNames, childClassNames, children) => {
  return (
    <div className={`mx-auto my-0 ${parentClassNames}`}>
      <div className={`text-center ${childClassNames}`}>{children}</div>
    </div>
  );
};
