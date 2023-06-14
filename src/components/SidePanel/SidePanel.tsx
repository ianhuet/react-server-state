import './SidePanel.css';

interface Props {
  title: string
  contents: JSX.Element[]
}

export function SidePanel(props: Props) {
  const { title, contents } = props

  return (
    <div className="sidePanel">
      <h3 className="sidePanel__title">{title}</h3>
      <ul className="sidePanel__contents">
        {contents.map((content: JSX.Element, index: number) => (
          <li key={index}>{content}</li>
        ))}
      </ul>
    </div>
  );
}
