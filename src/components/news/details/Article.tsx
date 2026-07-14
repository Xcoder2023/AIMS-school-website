"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface ArticleProps {
  article: {
    title: string;
    image: string;
    content: string[];
  };
}

export default function Article({ article }: ArticleProps) {
  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative mb-10 h-[500px] overflow-hidden rounded-3xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 text-lg leading-9 text-slate-700">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}