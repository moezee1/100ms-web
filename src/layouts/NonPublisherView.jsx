import React from "react";
import { ShieldAlertIcon } from "@100mslive/react-icons";
import { AddIcon } from "@100mslive/react-icons";
import { Box, Flex, Text } from "@100mslive/roomkit-react";

export const NonPublisherView = React.memo(({ message }) => {
  return (
    <Box
      css={{
        overflow: "hidden",
        w: "96%",
        maxWidth: "96%",
        h: "100%",
        m: "auto",
        background: "$surface_default",
        borderRadius: "$3",
      }}
      data-testid="non_publisher_view"
    >
      <Flex
        align="center"
        direction="column"
        css={{
          w: "$96",
          textAlign: "center",
          margin: "auto",
          h: "100%",
          justifyContent: "center",
          gap: "$8",
        }}
      >
        <AddIcon color="#C3D0E5" width="80px" height="80px" />
        <Flex
          direction="column"
          css={{
            w: "$80",
            p: "$1",
            gap: "$4",
          }}
        >
          <Text color="white" variant="h6" css={{ "@md": { fontSize: "$md" } }}>
            {message}
          </Text>
          <Text
            color="$on_surface_medium"
            css={{ mt: "$4", "@md": { fontSize: "$sm" } }}
          >
            
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
});
/* Please go to dashboard and reconfigure role settings or contact the role admin. */
