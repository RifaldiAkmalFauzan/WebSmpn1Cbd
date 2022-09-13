<template>
  <div>
    <section class="sm:mt-24 sm:mb-10 mt-16 mb-4">
      <div class="container">
        <div class="label grid grid-cols-2 gap-8 sm:w-2/5  w-4/5 mx-auto">
          <div class="kiri">
            <label for="small" class="block mb-2 text-sm font-bold text-center">
              Kelas</label>
            <select id="small"
              class="block p-2 mb-6 w-full text-sm text-secondary  rounded-lg border border-secondary focus:ring-blue-500 focus:border-blue-500 focus:outline-none">
              <option selected>Kelas</option>
              <option value="nine">IX</option>
              <option value="eight">VIII</option>
              <option value="seven">VII</option>
            </select>
          </div>
          <div class="kanan">
            <label for="small" class="block mb-2 text-sm font-bold text-center">
              Guru</label>
            <select id="small"
              class="block p-2 mb-6 w-full text-sm text-secondary  rounded-lg border border-secondary focus:ring-blue-500 focus:border-blue-500 focus:outline-none">
              <option selected>Nama Guru</option>
              <option value="nine">A</option>
              <option value="eight">B</option>
              <option value="seven">C</option>

            </select>
          </div>


        </div>
      </div>
    </section>
  </div>
</template>