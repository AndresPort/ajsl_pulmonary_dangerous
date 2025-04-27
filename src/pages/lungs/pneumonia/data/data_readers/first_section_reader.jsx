import "./first_section_reader.css";

function FirstSectionReader({data}) {
  return (
    <div className="data-reader">
        <h1 className="title">{data.Title}</h1>
        <p className="body">{data.Body}</p>
        {/* <ul className="items">
            {data.Items.map((item, index) => (
                <li key={index}>
                    <ul>
                        {data.Items[index].title1 && <h2>{item.title1}</h2>}
                        {item.items1.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                        ))}
                        {data.Items[index].title2 && <h2>{item.title2}</h2>}
                        {item.items2.map((subItem, subIndex) => (
                            <li key={subIndex}>{subItem}</li>
                        ))}
                    </ul>
                </li>
            ))
            }
        </ul> */}

    </div>
  );
}

export default FirstSectionReader;