import NavBarButton from "./NavBarButtons";
import Music from "./assets/music-solid.svg";
import Movies from "./assets/film-solid.svg";
import Games from "./assets/gamepad-solid.svg";
import Background from "./assets/background.svg";
import TextColor from "./assets/fill-solid.svg";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

type NavbarProps = {
  changeBackgroundImage: () => void; 
}

export default function Navbar({ changeBackgroundImage }: NavbarProps) {
  const [isBackgroundModalOpen, setIsBackgroundModalOpen] = useState(false);
  const [isTextColorModalOpen, setTextColorModalOpen] = useState(false);

  const handleCloseBackgroundModal = () => setIsBackgroundModalOpen(false);
  const handleCloseTextColorModal = () => setTextColorModalOpen(false);
  const [, setFontColor] = useState("black")

  return (
    <div className="bg-transparent p-3 border border-black border-5 d-flex justify-content-center w-100">
      <div className="bg-transparent p-3 d-flex justify-content-center w-75">
        <NavBarButton icon={Movies} onClick={() => alert("Coming Soon")} />
        <NavBarButton icon={Music} onClick={() => alert("Coming Soon")} />
        <NavBarButton icon={Games} onClick={() => alert("Coming Soon")} />
      </div>
      <div className="bg-transparent p-3 border-5 d-flex justify-content-left w-50">
        <NavBarButton icon={Background} onClick={() => setIsBackgroundModalOpen(true)} />

        <Modal show={isBackgroundModalOpen} onHide={handleCloseBackgroundModal}>
          <Modal.Header>
            <Modal.Title>Change Background</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please choose a new background <br />
            <div>
              <Button onClick={changeBackgroundImage}>
                Cycle Image
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseBackgroundModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloseBackgroundModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <NavBarButton icon={TextColor} onClick={() => setTextColorModalOpen(true)} />

        <Modal show={isTextColorModalOpen} onHide={handleCloseTextColorModal}>
          <Modal.Header>
            <Modal.Title>Change Text Color</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Choose a new text color: <br />
            <Button variant="danger" onClick={() => setFontColor("red")}>Red</Button>
            <Button variant="primary" onClick={() => setFontColor("blue")} >Blue</Button>
            <Button variant="warning" onClick={() => setFontColor("orange")}>Orange</Button>
          </Modal.Body>
          <Modal.Footer>
            
            <Button variant="success" onClick={handleCloseTextColorModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}