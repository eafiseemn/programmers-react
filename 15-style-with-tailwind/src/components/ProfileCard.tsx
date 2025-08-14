function ProfileCard() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 sm:py-8 gap-4 px-8 py-4 bg-[#d0daff] rounded-xl m-5 min-w-[200px]">
      <img className="size-30 rounded-full border-1 border-sky-800 mx-auto sm:mx-0 sm:shrink-0 block" src="/visual.png" alt="프로필 사진" />
      <div className="text-center sm:text-left">
        <div className="space-y-1 mb-4">
          <p className="text-xl sm:text-2xl font-semibold">Emily</p>
          <p className="font-light text-gray-500">Front-End Engineer</p>
        </div>
        <button className="border-primary text-primary outline-1 px-3 py-1 rounded-full hover:text-primary/70 hover:bg-secondary hover:border-white cursor-pointer transition-colors">Message</button>
      </div>
    </div>
  )
}
export default ProfileCard