import { Localized } from "@fluent/react/compat";
import React, { FunctionComponent, MouseEventHandler } from "react";

import Link from "./Link";
import Navigation from "./Navigation";
import SubLink from "./SubLink";

const ConfigureLinks: FunctionComponent<{}> = () => {
  return (
    <Navigation>
      <Localized id="configure-sideBarNavigation-general">
        <Link to="/admin/configure/general">General</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-organization">
        <Link to="/admin/configure/organization">Organization</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-moderation">
        <Link exact to="/admin/configure/moderation">
          Moderation
        </Link>
      </Localized>
      <Link
        exact
        to={{ pathname: "/admin/configure/moderation", hash: "#Comments" }}
      >
        {({
          href,
          onClick,
        }: {
          href: string;
          onClick: MouseEventHandler<HTMLButtonElement>;
        }) => {
          return (
            <Localized id="configure-sideBarNavigation-moderation-comments">
              <SubLink href={href} onClick={onClick}>
                Comments
              </SubLink>
            </Localized>
          );
        }}
      </Link>
      <Link
        exact
        to={{ pathname: "/admin/configure/moderation", hash: "#Users" }}
      >
        {({
          href,
          onClick,
        }: {
          href: string;
          onClick: MouseEventHandler<HTMLButtonElement>;
        }) => {
          return (
            <Localized id="configure-sideBarNavigation-moderation-users">
              <SubLink href={href} onClick={onClick}>
                Users
              </SubLink>
            </Localized>
          );
        }}
      </Link>
      <Localized id="configure-sideBarNavigation-moderationPhases">
        <Link to="/admin/configure/moderation/phases">Moderation Phases</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-bannedAndSuspectWords">
        <Link to="/admin/configure/wordList">Banned and Suspect Words</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-authentication">
        <Link to="/admin/configure/auth">Authentication</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-email">
        <Link to="/admin/configure/email">Email</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-slack">
        <Link to="/admin/configure/slack">Slack</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-webhooks">
        <Link to="/admin/configure/webhooks">Webhooks</Link>
      </Localized>
      <Localized id="configure-sideBarNavigation-advanced">
        <Link to="/admin/configure/advanced">Advanced</Link>
      </Localized>
    </Navigation>
  );
};

export default ConfigureLinks;
