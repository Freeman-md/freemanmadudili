<template>
    <div>
        <table class="w-full text-sm text-left rtl:text-right text-smoky">
            <thead
                class="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-smoky"
            >
                <tr>
                    <th scope="col" class="px-6 py-3">Project</th>
                    <th scope="col" class="px-6 py-3">Built with</th>
                    <th scope="col" class="px-6 py-3 hidden md:table-cell">
                        Link
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="i in 3"
                    :key="i"
                    class="border-b border-smoky animate-pulse"
                >
                    <td class="px-6 py-4">
                        <div class="bg-gray-300/30 rounded-md h-6 w-3/4"></div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="bg-gray-300/30 rounded-md h-6 w-1/2"></div>
                    </td>
                    <td class="px-6 py-4 hidden md:table-cell">
                        <div class="bg-gray-300/30 rounded-md h-6 w-1/4"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  