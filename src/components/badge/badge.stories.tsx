import React from "react";
import { Badge, BadgeProps } from "./badge";
import { select, text } from "@storybook/addon-knobs";
import styled from "styled-components";
import { Icon, IconProps } from "../icon/icon";
import { badgeColor } from "../shared/styles";
type selectType = "positive" | "negative" | "neutral" | "warning" | "error";

export const knobsBadge = () => (
  <Badge
    status={select<BadgeProps["status"]>(
      "status",
      Object.keys(badgeColor) as selectType[],
      "neutral"
    )}
  >
    {text("children", "i am badge")}
  </Badge>
);
export const all = () => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
  </div>
);

export const withIcon = () => (
  <Badge status="warning">
    <Icon icon="check" />
    with icon
  </Badge>
);
