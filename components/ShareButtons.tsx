"use client";
import React from "react";
import {
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon
} from "react-share";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { IoArrowRedo } from "react-icons/io5";


export default function ShareButtons({
  id,
  title,
}: {
  id: any;
  title: string;
}) {
  const url = "https://caker.vercel.app"
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-7 w-7" size="icon" variant="outline">
          <IoArrowRedo />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="mb-2">Share job : </p>
        <div className="flex items-center gap-2">
          <div>
            <TwitterShareButton url={`${url}/job/${id}`} title={title}>
              <XIcon size={32} round />
            </TwitterShareButton>
          </div>
          <WhatsappShareButton
            url={`${url}/job/${id}`}
            title={title}
            separator=" CAKER.ID : "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TelegramShareButton url={`${url}/job/${id}`} title={title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}
