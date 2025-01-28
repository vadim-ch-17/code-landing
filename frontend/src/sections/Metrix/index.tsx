import React from "react";
import client from "@/lib/graphQL/apolloClient";
import { createQuery } from "@/lib/graphQL/hooks";
import { getSectionContent } from "@/utils/getContent";
import { OurMetrix } from "@/types/fragments";
import { Heading, Paragraph } from "@/components";

const Metrix = async () => {
  const query = createQuery("OurMetrixFragment");

  const { data } = await client.query({
    query,
  });

  const { title, subtitle, metrix } = getSectionContent(
    data,
    "ourMetrix"
  ) as OurMetrix;

  return (
    <div className="bg-silver">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flec-col justify-center">
            <Heading level="h2" classes="mb-2">
              {title}
            </Heading>
            <Paragraph type="sm">{subtitle}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrix;
