/* eslint-disable react/prop-types */
export const Cbuttons = ({ 
  btype, 
  bclass = "", 
  tclass = "", 
  iclass = "", 
  text ="button", 
  icon, 
  ...props 
}) => {

  const buttons = [
    "bg-neutral-50 text-black px-3 py-1 rounded-full flex justify-center items-center gap-1 hover:bg-neutral-200 duration-75 hover:-translate-y-[0.10rem] active:scale-[1.01]",
    "bg-neutral-900 text-white px-3 py-1  flex justify-center items-center gap-1 hover:bg-neutral-950 duration-75 hover:-translate-y-[0.10rem] active:scale-[1.01]"
  ]
  return <button type="button" className={` select-none ${buttons[btype]==undefined?buttons[0]:buttons[btype]}  ${bclass} `}  {...props}>
        {icon && <span className={`material-symbols-outlined text-[1rem] font-medium max-sm:text-[0.6rem] ${iclass}`}>{icon}</span>}
        <p className={` font-medium capitalize max-sm:text-[0.6rem]  ${tclass}`} >{text}</p>
      </button>;
}
