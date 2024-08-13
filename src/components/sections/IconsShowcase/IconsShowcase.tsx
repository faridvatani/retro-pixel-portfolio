import React, { FC } from "react";
import Icon from "@/components/ui/Icon";

const IconsShowcase: FC = () => {
  return (
    <div className="relative bottom-0 mt-8 flex justify-center items-center">
      <Icon type="nes-mario" animate size="small" className="bottom-0" />
      <Icon type="nes-octocat" animate size="small" className="bottom-0" />
    </div>
  );
};

export default IconsShowcase;
