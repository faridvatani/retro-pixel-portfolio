import React, { FC } from "react";
import TextSpan from "@/components/ui/TextSpan";
import { Wrapper } from "@/components/ui/Wrapper";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

const Contact: FC = () => {
  return (
    <Wrapper className="mb-10">
      <TextSpan className="text-2xl font-semibold mb-4">
        Contact Information
      </TextSpan>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        <div>
          <h3 className="text-lg font-semibold text-primary mt-4">Email:</h3>
          <a
            href="mailto:example@gmail.com"
            className="block text-blue-600 hover:underline"
          >
            example@gmail.com
          </a>
          <h3 className="text-lg font-semibold text-primary mt-4">Phone:</h3>
          <p className="text-gray-700">+1234567890</p>
          <h3 className="text-lg font-semibold text-primary mt-4">Address:</h3>
          <p className="text-gray-700">123 Main Street, City, Country</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary mt-4">
            Social Media:
          </h3>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="facebook" size="medium" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="twitter" size="medium" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="linkedin" size="medium" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="github" size="medium" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="instagram" size="medium" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon type="youtube" size="medium" />
            </Link>
          </div>
          <h3 className="text-lg font-semibold text-primary mt-4">Website:</h3>
          <Link
            href="https://www.example.com"
            className="block text-blue-600 hover:underline"
          >
            www.example.com
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
