
export const Width = ({children}) => {
  return (
    <div className={`mx-auto min-h-screen pb-6 w-[60%] flex flex-col gap-5 max-sm:w-[90%]`}>
      {children}
    </div>
  )
}
