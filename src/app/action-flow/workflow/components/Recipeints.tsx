import { CustomSelect } from '@/cuteui/components/custom-select';
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Search } from '@/cuteui/components/searchbar';

const Recipients = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const [value, setValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  const recipeientItems: string[] = ['Instagram', 'Twitter', 'Reddit'];
  if (!open) return;
  return (
    <div className="absolute z-50 w-[40%] ml-2 inset-0">
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <div className="flex gap-4">
          <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
          <h2 className="text-sm font-semibold mb-8 flex text-black ">Choose recipient type</h2>
        </div>

        <div className="flex flex-col gap-8">
          <section>
            <p className="text-gray-200 mb-2">Customer Pool</p>
            <CustomSelect
              value={value}
              onChange={(e) => setValue(e.target.value)}
              options={recipeientItems}
              placeholder="Choose an option"
              size="sm"
              height={42}
            />
          </section>
          <section>
            <Search
              placeholderText="Search target audience"
              className="h-10"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue == '' ? (
              <p className="text-gray-400 mt-2 text-sm ml-5">No receipient selected</p>
            ) : (
              <p className="text-green-400 mt-2 text-sm ml-5">
                {' '}
                Searched receipients: {searchValue}
              </p>
            )}
          </section>
          <section></section>
        </div>
      </div>
    </div>
  );
};
export default Recipients;
