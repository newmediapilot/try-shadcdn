export type TypoTableData = {
  thead: Array<string>;
  tbody: Array<Array<string>>;
};

export function typoTable({ typoTableData }: { typoTableData: TypoTableData }) {
  const { thead, tbody } = typoTableData;
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="even:bg-muted m-0 border-t p-0">
            {thead.map((item: string) => (
              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((row: Array<string>) => (
            <tr className="even:bg-muted m-0 border-t p-0">
              {row.map((col: string) => (
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
