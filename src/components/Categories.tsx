import React from 'react'

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
}

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps>  = ({ value, onChangeCategory }): JSX.Element => {
  return (
    <div>
      <ul className="flex space-x-4 font-semibold text-sm mb-4">
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)}  className={value === i ? 'bg-zinc-600 rounded-3xl  px-3 py-2 text-white cursor-pointer' : 'bg-zinc-200 rounded-3xl  px-3 py-2 cursor-pointer'}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Categories