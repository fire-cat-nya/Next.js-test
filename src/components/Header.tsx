import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header>
      {/* トップナビゲーション */}
      <div className="flex items-center bg-amazon-blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/* ロゴ */}
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt="Amazon Logo"
            className="cursor-pointer"
          />
        </div>

        {/* 配送先情報 */}
        <div className="hidden sm:flex text-white text-sm ml-6">
          <div>
            <p className="text-gray-300">お届け先</p>
            <p className="font-bold">日本</p>
          </div>
        </div>

        {/* 検索バー */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder="検索"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* 右側のナビゲーション */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* 言語選択 */}
          <div className="link">
            <p>日本語</p>
            <p className="font-extrabold md:text-sm">JP</p>
          </div>

          {/* アカウント */}
          <div className="link">
            <p>こんにちは</p>
            <p className="font-extrabold md:text-sm">アカウント</p>
          </div>

          {/* 注文履歴 */}
          <div className="link">
            <p>返品・交換</p>
            <p className="font-extrabold md:text-sm">注文履歴</p>
          </div>

          {/* カート */}
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              カート
            </p>
          </div>
        </div>
      </div>

      {/* ボトムナビゲーション */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon-blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          すべて
        </p>
        <p className="link">プライム・ビデオ</p>
        <p className="link">Amazon ビジネス</p>
        <p className="link">今日のお得情報</p>
        <p className="link">エレクトロニクス</p>
        <p className="link">食品・飲料</p>
        <p className="link">プライム</p>
        <p className="link">本</p>
        <p className="link">ファッション</p>
        <p className="link">その他</p>
      </div>
    </header>
  );
}
