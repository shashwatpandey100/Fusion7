import constants from "../../constants.js"

export default function index() {
  return (
    <div className="flex px-[60px] w-full justify-center w-full text-xs cursor-pointer z-[5] absolute bottom-[30px] left-[0] roboticFont">
      <div className="flex w-full gap-5 justify-evenly">
        <a href={constants.youtube} target='_blank' className="hover:underline">Youtube</a>
        <a href={constants.instagram} target='_blank' className="hover:underline">Instagram</a>
        <a href={constants.dribble} target='_blank' className="hover:underline">Dribble</a>
        <a href={constants.linkedin} target='_blank' className="hover:underline">Linkedin</a>
        </div>
    </div>
  )
}
