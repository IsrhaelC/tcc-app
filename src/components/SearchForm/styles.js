import { StyleSheet } from "aphrodite";
import { fonts, colors } from "../../settings";

const styles = StyleSheet.create({
  form: {
    width: "25vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingTop: 15,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    boxShadow: "box-shadow: 0 0 0 0 rgba(0,0,0,0.80)",
    "@media (max-width: 600px)": {
      width: "80vw"
    }
  },
  formTitle: {
    color: colors.darker,
    fontFamily: fonts.comfortaa,
    fontSize: "22px",
    fontWeight: "bold"
  },
  formItem: {
    width: "100%",
    fontFamily: fonts.comfortaa
  },
  actions: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  buttonSignUp: {
    width: "8vw",
    height: "6vh",
    borderRadius: "1vh",
    backgroundColor: "#3AB19B",
    border: "2px solid #FFFFFF",
    display: "flex",
    alignItems: "center",
    cursor: 'pointer',
    justifyContent: "center",
    "@media (max-width: 600px)": {
      width: "40vw",
      height: "8vh"
    }
  },
  btnText: {
    color: colors.white,
    fontSize: "14pt",
    marginBottom: 0,
    fontFamily: fonts.comfortaa
  }
});

export default styles;
