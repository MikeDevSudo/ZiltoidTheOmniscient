import React from "react";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

const Instructions = ({ onClose }) => {
  const handleStartQuiz = () => {
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2>How to Play</h2>
      <p>
        Greetings, puny earthlings! Bow before the magnificence of Ziltoid the
        Omniscient, ruler of the cosmos! I have prepared a trial, a cosmic test
        of eight questions, to challenge your feeble minds.
      </p>

      <p>
        Behold! Eight questions shall stand in your way, daring to separate you
        from the unparalleled joy of savoring the divine nectar of the universe
        - coffee! The very elixir that fuels my cosmic escapades across galaxies
        and dimensions.
      </p>
      <p>
        Dare to delve into the mystic lore of Ziltoid, and attempt to prove your
        unworthy knowledge of the cosmos. Time is a fleeting concept, and the
        clock ticks relentlessly! Commence this arduous quest now, and if, by
        some astronomical miracle, you manage to answer correctly, I may grant
        you passage beyond my fearsome missiles and extend the privilege of
        joining me for a cup of celestial coffee.
      </p>

      <p>
        Prepare yourselves, for the cosmic forces shall be your guide in this
        daring endeavor!
      </p>

      <Button onClick={handleStartQuiz}>Next</Button>
    </Modal>
  );
};

export default Instructions;
