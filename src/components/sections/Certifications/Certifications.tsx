import React, { FC } from "react";
import TextSpan from "@/components/ui/TextSpan";
import { Wrapper } from "@/components/ui/Wrapper";
import List from "@/components/ui/List";
import Badge from "@/components/ui/Badge";

interface Certification {
  name: string;
  status: string;
  statusVariant: "dark" | "primary" | "success" | "warning" | "error";
}

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: FC<CertificationsProps> = ({ certifications }) => {
  return (
    <Wrapper className="mb-10 w-full">
      <TextSpan className="text-2xl font-semibold mb-4">Certifications</TextSpan>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-5">
        <List
          items={certifications}
          renderItem={(cert) => (
            <div
              key={cert.name}
              className="flex flex-col md:flex-row gap-4 w-full justify-start items-center"
            >
              <span className="block text-lg font-semibold w-full md:w-auto">
                {cert.name}
              </span>
              <Badge variant={cert.statusVariant} className="text-sm">
                {cert.status}
              </Badge>
            </div>
          )}
        />
      </div>
    </Wrapper>
  );
};

export default Certifications;