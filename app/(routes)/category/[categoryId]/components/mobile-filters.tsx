"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filters";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Button onClick={open} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        className="z-40 lg:hidden relative"
        onClose={close}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex max-w-xs w-full h-full flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={close} />} />
            </div>
            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
