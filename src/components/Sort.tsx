import React, { useState } from 'react'


type SortProps = {
  value: SortItem;
  onChangeSort: (idx: SortItem) => void;
}

type SortItem = {
  name: string;
  sortProperty: string
}

const Sort: React.FC<SortProps> = ({ value, onChangeSort }): JSX.Element => {
  const [open, setOpen] = useState(false)
  const list: SortItem[] = [
    { name: 'популярности (⬇)', sortProperty: '-rating' },
    { name: 'популярности (⬆)', sortProperty: 'rating' },
    { name: 'цене (⬇)', sortProperty: '-price'},
    { name: 'цене (⬆)', sortProperty: 'price'},
    { name: 'алфавиту (от А до Я)', sortProperty: '-title' },
    { name: 'алфавиту (от Я до А)', sortProperty: 'title' }
  ]

  const onClickListItem = (i: SortItem): void => {
    onChangeSort(i)
    setOpen(false)
  }

  return (
    <>
      <div className=" space-x-2 ">
        <b className="font-semibold">Сортировка по:</b>
        <span onClick={() => setOpen(!open)} className="text-orange-500 cursor-pointer underline underline-offset-2 decoration-dotted">
          {value.name}
        </span>
        {open && (
          <div>
            <ul className="flex flex-col fixed bg-white rounded px-2 py-3">
              {
                list.map((obj, i) => (
                  <li
                    key={i}
                    onClick={() => onClickListItem(obj)}
                    className={value.sortProperty === obj.sortProperty ? ' text-orange-500' : ''}
                  >
                    {obj.name}
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Sort