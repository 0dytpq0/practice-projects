export const changeNameToChips = ({
  name,
  type,
}: {
  name: string | undefined;
  type: string;
}) => {
  if (type === "type") {
    return (
      <div className="min-w-12 h-10  mx-1.5 my- p-2 rounded-xl flex items-center justify-center bg-red-500 text-white font-semibold">
        {name}
      </div>
    );
  }
  if (type === "skills") {
    return (
      <div className="min-w-12 h-10  m-2 my- p-2 rounded-xl flex items-center justify-center bg-white border border-violet-700 font-semibold">
        {name}
      </div>
    );
  }
  return (
    <div className="min-w-12 h-10  mx-1.5 p-2 rounded-xl flex items-center justify-center bg-green-500 text-white font-semibold">
      {name}
    </div>
  );
};
