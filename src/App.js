import React from 'react'
import { createBrowserRouter, RouterProvider, Routes, Route, Link, Outlet } from 'react-router-dom'

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function Root() {
  return <pre className="font-serif">
  <React.Fragment>
    <React.Fragment>
      The Raven
      <br />
    </React.Fragment>
    <React.Fragment>
      BY EDGAR ALLAN POE
      <br />
    </React.Fragment>
    <React.Fragment>
      <br />
    </React.Fragment>
    <React.Fragment>
      Once upon a midnight dreary, while I pondered, weak and weary,
      <br />
    </React.Fragment>
    <React.Fragment>
      Over many a quaint and curious volume of forgotten lore—
      <br />
    </React.Fragment>
    <React.Fragment>
      {'    '}While I nodded, nearly napping, suddenly there came a tapping,
      <br />
    </React.Fragment>
    <React.Fragment>
      As of some one gently rapping, rapping at my chamber door.
      <br />
    </React.Fragment>
    <React.Fragment>
      “’Tis some visitor,” I muttered, “tapping at my chamber door—
      <br />
    </React.Fragment>
    <React.Fragment>
      {'            '}Only this and nothing more.”
      <br />
    </React.Fragment>
    <React.Fragment>
      <br />
    </React.Fragment>
    <React.Fragment>
      {'    '}Ah, distinctly I remember it was in the bleak December;
      <br />
    </React.Fragment>
    <React.Fragment>
      And each separate dying ember wrought its ghost upon the floor.
      <br />
    </React.Fragment>
    <React.Fragment>
      {'    '}Eagerly I wished the morrow;—vainly I had sought to borrow
      <br />
    </React.Fragment>
    <React.Fragment>
      {'    '}From my books surcease of sorrow—sorrow for the lost Lenore—
      <br />
    </React.Fragment>
    <React.Fragment>
      For the rare and radiant maiden whom the angels name Lenore—
      <br />
    </React.Fragment>
    <React.Fragment>
      {'            '}Nameless here for evermore.
    </React.Fragment>
  </React.Fragment>
</pre>
}

export default function App() {
  return <RouterProvider router={router} />
}