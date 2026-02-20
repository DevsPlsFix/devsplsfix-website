import React from "react";

export interface JsonLdProps<T = unknown> {
  data: T | T[];
  id?: string;
}

export function JsonLd<T>({ data, id }: JsonLdProps<T>) {
  const nodes = Array.isArray(data) ? data : [data];

  const json = JSON.stringify(
    nodes,
    (_key, value) => {
      if (value === undefined) return undefined;
      return value;
    },
  );

  return (
    <script
      id={id}
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

