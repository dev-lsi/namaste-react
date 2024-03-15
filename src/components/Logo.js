import {LOGO_URL} from "../utils/constants.js";

const Logo = () => {
    return (
      <div className="logo-container">
        <img
          className="logo-image"
          src={LOGO_URL}
        />
      </div>
    );
};

export default Logo;