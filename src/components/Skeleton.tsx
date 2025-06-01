interface IProps {
  type: "card" | "list" | "h-card";
  row?: number;
  Haveavatar?: boolean;
}

const TableSkeleton = ({ rows = 5, cols = 4 }) => {
  return (
    <div className="w-full overflow-x-auto mt-6">
      <table className="min-w-full border border-neutral-200 rounded-md">
        <thead>
          <tr>
            {Array.from({ length: cols }).map((_, i) => (
              <th key={i} className="p-4 border-b border-neutral-200 text-left">
                <div className="w-24 h-4 bg-neutral-200 rounded animate-pulse" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: cols }).map((_, colIndex) => (
                <td key={colIndex} className="p-4 border-b border-neutral-100">
                  <div className="w-4/5 h-4 bg-neutral-200 rounded animate-pulse" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SkeletonCustom = ({ type, row = 2, Haveavatar = false }: IProps) => {
  return (
    <>
      {type === "card" && (
        <div className="mx-auto w-[90%] max-w-[1440px] my-20 px-4">
          <div>
            <div className="w-[50%] h-4 bg-neutral-200 my-4 rounded " />
            <div className="w-[40%] h-4 bg-neutral-200 rounded my-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                className="border rounded-md border-neutral-200 p-4 space-y-3 animate-pulse"
                key={index}
              >
                <div className="w-full h-36 bg-neutral-200 rounded" />
                {Haveavatar && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-300 rounded-full" />
                    <div className="flex-1 h-4 bg-neutral-200 rounded" />
                  </div>
                )}
                {Array.from({ length: row }).map((_, i) => (
                  <div key={i} className="h-4 bg-neutral-200 rounded w-full" />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {type === "list" && (
        <div className="w-full">
          <TableSkeleton cols={4} rows={8} />
        </div>
      )}

      {type === "h-card" && (
        <div className="w-full animate-pulse">
          <div className="mb-4">
            <div className="w-24 h-4 bg-neutral-200 rounded mb-2" />
            <div className="flex items-center gap-4 w-1/5">
              <div className="w-full h-8 bg-neutral-200 rounded" />
              <div className="w-full h-8 bg-neutral-200 rounded" />
            </div>
          </div>
          <div className="mt-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                className="border rounded-md border-neutral-100 p-4 mt-2 space-y-3"
                key={index}
              >
                {Haveavatar && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-300 rounded-full" />
                    <div className="flex-1 h-4 bg-neutral-200 rounded" />
                  </div>
                )}
                {Array.from({ length: row }).map((_, i) => (
                  <div key={i} className="h-4 bg-neutral-200 rounded w-full" />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SkeletonCustom;
