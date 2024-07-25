const Button = (props) => {
    const {color = "bg-gradient-to-r from-[#BE2EE6] from-0% to-[#4B20DC] to-100%", title = "....", textColor = "text-[#4D20DD]", size = "xl" } = props
    return (
        <button className={`h-10 px-7 items-center font-semibold text-${size} ${color} ${textColor} border border-slate-600 rounded-full`}>
          {title}
        </button>
    )
}

export default Button