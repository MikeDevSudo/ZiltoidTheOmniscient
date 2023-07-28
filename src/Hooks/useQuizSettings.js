import { useState, useEffect } from "react";

const useQuizSettings = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedAbilities, setSelectedAbilities] = useState([]);
  const [settingsSelected, setSettingsSelected] = useState(false);
  const [questionsToWin, setQuestionsToWin] = useState(5);

  useEffect(() => {
    console.log("settingsSelected updated useEffect:", settingsSelected);
    console.log("selectedDifficulty updated useEffect:", selectedDifficulty);
    console.log("selectedAbilities updated useEffect:", selectedAbilities);
    console.log("questionsToWin updated useEffect:", questionsToWin);
  }, [settingsSelected, selectedDifficulty, selectedAbilities, questionsToWin]);

  const difficultyOptions = [
    { level: "easy", questionsToWin: 5 },
    { level: "medium", questionsToWin: 6 },
    { level: "hard", questionsToWin: 7 },
  ];

  const handleDifficultyChange = (selectedDifficulty) => {
    setSelectedDifficulty(selectedDifficulty);
    const selectedOption = difficultyOptions.find(
      (option) => option.level === selectedDifficulty
    );
    setQuestionsToWin(selectedOption ? selectedOption.questionsToWin : 5);
  };

  const handleAbilityToggle = (ability) => {
    setSelectedAbilities((prevAbilities) =>
      prevAbilities.includes(ability)
        ? prevAbilities.filter((prevAbility) => prevAbility !== ability)
        : [...prevAbilities, ability]
    );
    console.log("handleAbilityToggle", ability);
  };

  const handleApplySettings = () => {
    setSettingsSelected(true);
  };

  return {
    selectedDifficulty,
    selectedAbilities,
    settingsSelected,
    questionsToWin,
    handleDifficultyChange,
    handleAbilityToggle,
    handleApplySettings,
  };
};

export default useQuizSettings;
