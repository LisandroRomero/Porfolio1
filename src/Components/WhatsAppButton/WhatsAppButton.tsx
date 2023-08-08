import { FaWhatsapp } from "react-icons/fa";
import styles from "./WhatsAppButton.module.css";
const WhatsAppButton = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=5492616094239&text=Hi!+Lisandro"
        className={styles.whatsAppFloat}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={36} color="#fff" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
