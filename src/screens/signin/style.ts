import colors from "@/src/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 34,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray100,
    borderRadius: 4,
    marginBottom: 12,
    padding: 12,
  },
  button: {
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 4
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: colors.white,
    marginTop: 16,
    textAlign: "center",
  },
});

export default styles;