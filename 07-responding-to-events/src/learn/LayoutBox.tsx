interface Props {
  onClick: (e:React.MouseEvent<HTMLDivElement>) => void;
  style: React.CSSProperties & {'--color'? : string};
  children?: React.ReactNode;
  title: string;
  'aria-label': string;
}

function LayoutBox({onClick, children, ...restProps}:Props) {
  return (
    <div 
      className="box" 
      onClick={onClick}
      // style={style}
      // title={title}
      {...restProps}
    >
        {children}

    </div>
  )
}

export default LayoutBox