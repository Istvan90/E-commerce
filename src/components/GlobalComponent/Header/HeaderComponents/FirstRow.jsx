import { MeetingButton } from "./MeetingButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import logo from "../../../../Image/Logo/Logo.png";
import MadagascarFlag from "../../../../Image/Logo/Madagascar.png";
import Profile from "../../../../Image/Icone/UserIcon.png";
import Bag from "../../../../Image/Icone/PanierIcon.png";
import Cloche from "../../../../Image/Icone/Cloche.png";

export function FirstRow() {
  let totalItems = 0;

  const state = useSelector((state) => state.handleCart);
  state.map((item) => {
    return (totalItems += item.qty)
  })

  return (
    <div className="d-flex align-items-center FirstRow">
      {/*The left part of Header*/}
      <div className="d-flex align-items-center left">
        <img src={MadagascarFlag} alt={"Madaflag"} width={'33px'} height={'22px'} />
        <div style={{ paddingLeft: "10px" }}>
          <p className="pt-3" >102 Madagascar</p>
        </div>

        <div style={{ width: "15px" }}>
          <p className="pt-3">|</p>
        </div>

        <div>
          <p className="pt-3">Service client</p>
        </div>

        <div>
          <Link to="/service-client">
            <img src={Cloche} alt="Cloche" width="25px" height="25px" />
          </Link>
        </div>
      </div>

      {/*The Center part of Header (Logo)*/}
      <div className="justify-content-center Center">
        <Link to="/">
          <img src={logo} width={"225px"} alt={"Joiallerie Madagascar"} />
        </Link>
      </div>

      {/*The Right part of Header*/}
      <div className="Right">
        <div className="w-50">
          <MeetingButton Content={"Prendre rendez-vous"} Link={"/prendre-rdv"} />
        </div>
        <div className="p-4 w-100">
          <p className="mb-0 w-105 fs-10">+20 22 673 75</p>
        </div>
        <div className="Icon-responsive-gap">
          <div>
            <Link to="/user-profile">
              <img src={Profile} className="HeaderIcon" alt="UserIcon" width={"21px"} height={"21px"} />
            </Link>
          </div>
          <div>
            <Link to="/user-Bag">
              <>
                <p className="cart-counter position-absolute top-11  ml-5 translate-middle badge rounded-pill text-dark">
                  {totalItems}
                </p>
                <img src={Bag} className="HeaderIcon" alt="UserIcon" width={"21px"} height={"21px"} />
              </>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}