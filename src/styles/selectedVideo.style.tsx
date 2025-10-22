import { StyleSheet } from "react-native";

export const selectedVideoStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  videoContainer: {
    width: "100%",
    aspectRatio: 8 / 5,
    backgroundColor: "#000",
  },

  video: {

    height: "100%"
  },

  metaSection: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },

  subtitleText: {
    fontSize: 14,
    fontWeight: "400",
  },

  tagsText: {
    color: "#0800ff",
    fontWeight: "500",
  },

  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#777",
  },

  actionButton: {
    alignItems: "center",
  },

  actionText: {
    fontSize: 12,
    marginTop: 4,
  },

  channelContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 10,
  },

  canalImagen: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  channelName: {
    fontSize: 14,
    fontWeight: "600",
  },

  channelSubs: {
    fontSize: 12,
  },

  subscribeButton: {
    backgroundColor: "red",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 4,
  },

  subscribeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "justify",
  },
});
