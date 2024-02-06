import { useState } from "react";
import { EXAMPLES } from "../data.jsx";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleButton(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select Topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
        <Tabs 
        // ButtonContainer="menu"
        buttons={<>
            <TabButton
          isSelected={selectedTopic == "components"}
          onClick={() => handleButton("components")}
        >
          Componenets
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleButton("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleButton("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleButton("state")}
        >
          State
        </TabButton>
        </>} />
            {tabContent}
        
    </Section>
  );
}
