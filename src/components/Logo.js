import {LOGO_URL} from "../utils/constants.js";

const Logo = () => {
    return (
      <div>
        <img
          className="w-24 rounded-full"
          src={LOGO_URL}
        />
      </div>
    );
};

export default Logo;